import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req , res)=>
{
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants : {$all : [receiverId, senderId]}
        }); 

        if(!conversation)
        {
            conversation = await Conversation.create({
                participants : [receiverId, senderId]
            });
        }
        const newMessage = new Message({
            senderId, 
            receiverId , 
            message 
        })
        console.log(newMessage) ;
        if(newMessage)
        {
            conversation.messages.push(newMessage._id) ;
        }
        // await conversation.save();
        // await newMessage.save();
        //this will work in parallel
        await Promise.all([
            conversation.save(),
            newMessage.save()
        ]) ;
        res.status(201).json(newMessage) ;
    } catch (error) {
        console.log("Error in send Msg controller:",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const getMessages = async(req , res) =>{
    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants : {$all : [userToChatId, senderId]}
        }).populate("messages") ;
        if(!conversation) return res.status(200).json([]);
        res.status(200).json(conversation.messages);
        
    } catch (error) {
        console.log("Error in get Msg controller:", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }    
}