
type ContainerProps = {
  children: React.ReactNode,
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {

  return (
    <div className={`mx-auto max-w-6xl px-6 sm:px-7 md:px-8 lg:px-9 ${className}`}>
      {
        children
      }
    </div>
  )
}