type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="pl-[256px] h-full">
      <div className="">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;