// import "@/styles/global.css"
import "../styles/global.css"
import Image from 'next/image';
import Link from 'next/link';

type props = {
    id: number,
    title: string,
}

export default function Post(
    { id, title }: props
) {
    return (
        <div className="post_container" key={id}>
            <Link href={`/blog/${id}`} className="unstyled_link">
                <Image src={"/post_header.png"} width={50} height={50} alt='post title point' />
                <h2 style={{ paddingLeft: 10 }}>
                    {title}
                </h2>
            </Link>

        </div>
    )
}