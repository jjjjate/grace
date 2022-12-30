import React from 'react';

const Profile = ({title, image, name, part, email}) => {
  return (
    <>
      <div className="container mx-auto md:px-16 py-8">
        <h3 className="text-orange-300 font-bold pb-6">{title}</h3>
        <div className="px-6 pb-6">
          <div className="w-48">
            {image}
          </div>
          <div className="w-48 text-center">
            <h4>{name}</h4>
            <p className="font-extralight text-xs">{part}</p>
            <p className="font-extralight text-xs">{email}</p>
          </div>
        </div>
        <div className="border-b-2 border-gray-400" />
      </div>
    </>
  )
}

export default Profile