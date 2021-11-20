const ProgressBar = ( props ) => {
    return (
        <div className="progress-bar px-0">
            <Filler percentage={props.percentage}/>
        </div>
    )
}

export default ProgressBar