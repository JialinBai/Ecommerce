import ProfileSide from "@/components/ProfileSide"

interface ProfileLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function ProfileLayout({ children, title }: ProfileLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Side bar */}
        <div className='w-64'>
          <ProfileSide />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-white p-8 rounded shadow-sm">
          {title && <h1 className="text-xl text-black font-semibold mb-6">{title}</h1>}
          {children}
        </div>
      </div>
    </div>
  )
}