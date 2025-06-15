import Image from "next/image"
import { getPost } from "../../lib"
// import "@/styles/global.css"
import "../../styles/global.css"


type props = {
    params: Promise<{ slug: number }>
}

export default async function BlogPostPage(
    { params }: props
) {

    const { slug } = await params
    const post = await getPost(slug)

    return (
        <div className="slug_page_wrapper">
            <div key={post.id} id="slug_post_container">
                <Image src={"/post_header.png"} style={{ alignSelf: 'center' }} width={50} height={50} alt='post title point' />
                <h1>{post.title}</h1>
                <p id="slug_body">{post.body}</p>
                <div id="slug_tags_row_container">
                    {
                        post.tags.map((tag, idx) => <p key={idx} id="slug_tag_container">{tag}</p>)
                    }
                    <div id="reaction_container" >
                        <Image src={"/like.png"} width={35} height={35} alt="like image" />
                        <p style={{ paddingLeft: 10, fontSize: 16 }}>{post.reactions.likes}</p>
                    </div>
                    <div id="reaction_container">
                        <Image src={"/dislike.png"} width={35} height={35} alt="dislike image" />
                        <p style={{ paddingLeft: 10, fontSize: 16 }}>{post.reactions.dislikes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}