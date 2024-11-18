import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout/LeftNavbar";
import RightNavbar from "../components/layout/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto gap-3 pt-5 grid md:grid-cols-12">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;