import Image from "next/image";
import Link from "next/link";

export default function page() {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <Link
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'black',
                }}
                href={"/blog"}>
                <h1>Let&apos;s get start !</h1>
                <Image src={"/lets_start.png"} alt="let's get start image" width={90} height={90} />
            </Link>
        </div>

    )
}