export default function todayDate() {
        return <div>{GetDate()}</div>
}

function GetDate() {
    return new Date().toDateString()
}

