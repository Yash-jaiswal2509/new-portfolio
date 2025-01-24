type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm h-screen w-full flex items-center justify-center">
            {children}
        </div>
    )
}

export default AuthLayout