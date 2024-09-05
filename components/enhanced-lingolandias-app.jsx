'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BookOpen, Calendar, Home, Settings, User, HelpCircle, LogOut, Camera, Bell, Search, Plus, X } from "lucide-react"

export function EnhancedLingolandiasAppJsx() {
  const [activeTab, setActiveTab] = useState('home')
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  })

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 234 567 8900",
    email: "john.doe@example.com",
    address: "123 Main St",
    city: "Anytown",
    country: "United States",
    postalCode: "12345",
    biography: "Language enthusiast and world traveler.",
    avatarUrl: "/placeholder.svg?height=128&width=128",
    level: "Intermediate",
    xp: 2500,
    nextLevelXp: 5000,
    languages: ["Spanish", "French", "German"],
    streak: 15
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target
    setNewUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleRoleChange = (value) => {
    setNewUser(prevUser => ({ ...prevUser, role: value }))
  }

  const handleCreateUser = () => {
    console.log('Creating new user:', newUser)
    setIsCreateUserModalOpen(false)
    setNewUser({ firstName: '', lastName: '', email: '', password: '', role: '' })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUser(prevUser => ({ ...prevUser, avatarUrl: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#43a047] to-[#2e7d32] text-white p-6">
        <div className="flex items-center space-x-2 mb-8">
          <BookOpen className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Lingolandias</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${activeTab === 'home' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`} onClick={() => setActiveTab('home')}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${activeTab === 'schedule' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`} onClick={() => setActiveTab('schedule')}>
            <Calendar className="h-5 w-5" />
            <span>My Schedule</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${activeTab === 'learning' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`} onClick={() => setActiveTab('learning')}>
            <BookOpen className="h-5 w-5" />
            <span>Learning</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${activeTab === 'profile' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`} onClick={() => setActiveTab('profile')}>
            <User className="h-5 w-5" />
            <span>Profile</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${activeTab === 'admin' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`} onClick={() => setActiveTab('admin')}>
            <Settings className="h-5 w-5" />
            <span>Admin</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-white border-opacity-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
                <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-gray-300">{user.level}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === 'home' && 'Dashboard'}
              {activeTab === 'schedule' && 'My Schedule'}
              {activeTab === 'learning' && 'Learning Center'}
              {activeTab === 'profile' && 'My Profile'}
              {activeTab === 'admin' && 'Admin Panel'}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white transition-colors duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
                      <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem className="flex items-center" onClick={() => setActiveTab('profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Guide</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {activeTab === 'profile' ? (
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <div className="relative mb-4 sm:mb-0 sm:mr-6">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
                      <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                    </Avatar>
                    <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-[#9c27b0] text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-[#7b1fa2] transition-colors duration-200">
                      <Camera className="h-5 w-5" />
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{user.firstName} {user.lastName}</h3>
                    <p className="text-sm text-gray-500">{user.level} • {user.xp} XP</p>
                    <div className="mt-2">
                      <Progress value={(user.xp / user.nextLevelXp) * 100} className="w-full" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{user.nextLevelXp - user.xp} XP to next level</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" value={user.firstName} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={user.lastName} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" value={user.phone} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={user.email} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" value={user.address} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" value={user.city} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" name="country" value={user.country} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" name="postalCode" value={user.postalCode} onChange={handleInputChange} className="mt-1" />
                  </div>
                </div>
                <div className="mt-6">
                  <Label htmlFor="biography">Biography</Label>
                  <Textarea
                    id="biography"
                    name="biography"
                    value={user.biography}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <div className="mt-6">
                  <Button className="bg-[#43a047] hover:bg-[#3d9142] text-white">Save Changes</Button>
                </div>
              </div>
            </div>
          ) : activeTab === 'admin' ? (
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">User Management</h3>
                <Button onClick={() => setIsCreateUserModalOpen(true)} className="bg-[#43a047] hover:bg-[#3d9142] text-white">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New User
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">Daily Streak</h3>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-[#43a047]">{user.streak}</span>
                    <span className="ml-2 text-gray-600">days</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.languages.map((lang, index) => (
                      <span key={index} className="px-2 py-1 bg-[#9c27b0] text-white rounded-full text-sm">{lang}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">Next Lesson</h3>
                  <p className="text-gray-600">Spanish - Intermediate</p>
                  <p className="text-sm text-gray-500">Today at 3:00 PM</p>
                </div>
              </div>
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#9c27b0] mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-[#43a047] p-2 rounded-full mr-4">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Completed Spanish Lesson 5</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#9c27b0] p-2 rounded-full mr-4">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Joined French Study Group</p>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#43a047] p-2 rounded-full mr-4">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Completed German Lesson 3</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Create User Modal */}
      {isCreateUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-lg font-medium text-gray-900">Create New User</h3>
              <Button variant="ghost" onClick={() => setIsCreateUserModalOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={newUser.firstName} onChange={handleNewUserInputChange} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={newUser.lastName} onChange={handleNewUserInputChange} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={newUser.email} onChange={handleNewUserInputChange} />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" value={newUser.password} onChange={handleNewUserInputChange} />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select onValueChange={handleRoleChange} value={newUser.role}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3 p-6 border-t">
              <Button variant="outline" onClick={() => setIsCreateUserModalOpen(false)}>Cancel</Button>
              <Button className="bg-[#43a047] hover:bg-[#3d9142] text-white" onClick={handleCreateUser}>Create</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}