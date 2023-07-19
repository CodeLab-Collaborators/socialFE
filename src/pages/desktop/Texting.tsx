import React from 'react';

const Texting: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow">
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500">@johndoe</p>
          </div>
        </div>
        <div className="flex mb-6">
          <div className="mr-8">
            <h2 className="font-bold">Posts</h2>
            <p>100</p>
          </div>
          <div className="mr-8">
            <h2 className="font-bold">Followers</h2>
            <p>10k</p>
          </div>
          <div>
            <h2 className="font-bold">Following</h2>
            <p>500</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Bio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Texting;