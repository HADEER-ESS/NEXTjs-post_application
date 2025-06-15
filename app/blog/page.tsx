// import Post from "@/components/post"
import Post from "../components/post"
import { getPosts } from "../lib"
// import "@/styles/global.css"
import "../styles/global.css"

export default async function Page() {

    const posts = await getPosts()

    return (
        <div className="body">
            {
                posts?.map((post) =>
                    <Post key={post.id} id={post.id} title={post.title} />
                )
            }
        </div>
    )
}