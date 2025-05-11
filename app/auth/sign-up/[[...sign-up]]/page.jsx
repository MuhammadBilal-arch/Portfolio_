import { SignUp } from "@clerk/nextjs";
import { ASSETS } from "@/public/assets/path";

export default function Page() {
    return <div
        style={{
            backgroundImage: `url(${ASSETS.CONTACT_SVG.src})`
        }}
        className="flex items-center justify-center bg-cover max-h-screen min-h-screen bg-aqua">
        <SignUp />
    </div>;
}