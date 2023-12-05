import Footer from "./footer";
import Header from "./header";

interface Props {
    children: React.ReactNode;
}

export const MainLayout = ({children}: Props) => {
    return (
        <>
        <Header />
        <main className={`w-full flex flex-col justify-center items-center`}>
        {children}
        </main>
        <Footer />
        </>
    )
}

export default MainLayout;