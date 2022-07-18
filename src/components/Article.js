import React from "react";
    function Article({title, date = "January 1, 1970", preview, minutes}) {

        const emoji = minutes < 30 ? "☕️" : "🍱"
        let totalEmojis = ""

        if (minutes < 30) {
            for (let i = 0; i < minutes; i+=5) {
                totalEmojis += emoji
            }
        } else {
            for (let i = 0; i < minutes; i+=10) {
                totalEmojis += emoji
            }
        }

        return (
            <article>
            <h3>{title}</h3>
            <small>{date} | {minutes} min read {totalEmojis}</small>
            <p>{preview}</p>

            </article>
        )

    }

export default Article;