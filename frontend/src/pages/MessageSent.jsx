import { Link } from "react-router-dom";

export default function MessageSent() {

    return (
        <div className="flex-center">
            <h2 className="crud-title">Message Sent</h2>
            <p className="message-sent centered">Your message has been sent!</p>
            <Link className="button" to="/">Continue</Link>
        </div>
    )
}