import React from "react";

const NotFoundPage = function (props) {
    return (
        <div>
            <article className="post page post-full">
                <header className="post-header">
                    <h1 align='center' className="post-title">'Sorry Page Not Found!</h1>
                </header>

                <div>
                    <p align="center"> 😢 You just hit a route that doesn&#39;t exist... the sadness. <br></br> <a href="/">Head Back to gofuneral</a></p>
                </div>

            </article>
        </div>

    );
}
export default NotFoundPage;
