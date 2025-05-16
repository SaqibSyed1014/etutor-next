import Minimal from "@/components/layouts/Minimal";

const Layout = ({ children }) => {
    return (
        <>
            <Minimal slot="auth">
                {children}
            </Minimal>
        </>
    )
}

export default Layout;
