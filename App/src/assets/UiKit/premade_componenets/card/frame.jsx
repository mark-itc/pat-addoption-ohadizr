import './Frame.scss';

export const Frame = ({ children, addClass }) => {
    return (
        <div className={`Frame ${addClass || ''}`}>
            {children}
        </div>
    )
}

export const Between = (props) => {
    return <Line {...props} addClass="between" />
}

export const Rows = (props) => {
    return <Line {...props} addClass="rows" />
}
