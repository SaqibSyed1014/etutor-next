import Minimal from "@/components/layouts/Minimal";

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <Minimal slot="auth">
                {children}
            </Minimal>
        </>
    )
}

export default Layout;
