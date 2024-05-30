const GenderCheckbox = () => {
    return (

        <div className="form-control flex flex-row">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>

    )
}
export default GenderCheckbox;