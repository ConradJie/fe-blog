import React from "react";
import './BlogpostsDetail.css';
import {useParams} from "react-router-dom";

function BlogpostsDetail() {
    const {id} = useParams();
    return (
        <>
            <h2>Blogposts Detail</h2>
            <p>id={id}</p>
        </>
    );
}

export default BlogpostsDetail;