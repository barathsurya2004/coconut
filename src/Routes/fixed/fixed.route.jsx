import { Outlet } from "react-router-dom"
import NavigationBar from "../../components/navigation-bar/navigation-bar.component"
import Footer from "../../components/footer/footer.component"



export const Fixed = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    )
}