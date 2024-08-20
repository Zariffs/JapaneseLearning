import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
    activeCourse: { imageSrc: string; title: string }; // Make DB types and replace
    points: number;
    hearts: number;
    hasActiveSubscription: boolean;
};

export const UserProgress = ({ activeCourse, points, hearts, hasActiveSubscription }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant={"ghost"}>
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant={"ghost"} className="text-orange-500">
                    <ShoppingCartIcon className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant={"ghost"} className="text-rose-500">
                    {hasActiveSubscription ? (
                        <InfinityIcon className="h-4 w-4 stroke-[3]" />
                    ) : (
                        <>
                            <FavoriteBorderIcon className="mr-2" />
                            {hearts}
                        </>
                    )}
                </Button>
            </Link>
        </div>
    );
};
