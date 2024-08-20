import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",className)}>
            <Link href="/home">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    {/* <image>
                    </image> */}
                    <h1 className="text-2xl font-extrabold tracking-wide">
                        AJL 日本語
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="ホーム" href="/home"/>
                <SidebarItem label="クエスト" href="/quests"/>
                <SidebarItem label="リーダーボード" href="/leaderboard"/>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
            </div>
        </div>
    );
}
