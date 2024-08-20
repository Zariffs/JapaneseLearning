import { Button } from "@/components/ui/button";

const buttnosPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Default</Button>
            <Button variant={"primary"}>Primary</Button>
            <Button variant={"primaryOutline"}>Primary Outline</Button>
            <Button variant={"max"}>Max</Button>
            <Button variant={"maxOutline"}>Max Outline</Button>
            <Button variant={"ghost"}>Ghost</Button>
            <Button variant={"sidebar"}>Sidebar</Button>
            <Button variant={"sidebarOutline"}>Sidebar Outline</Button>
        </div>
    );
};

export default buttnosPage;