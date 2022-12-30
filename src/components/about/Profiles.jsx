import React from 'react';

const images = [
  {
    photo: "../img/about/elder002.png",
    id: "구재호"
  },
  {
    photo: "../img/about/elder003.png",
    id: "손웅기"
  },
  {
    photo: "../img/about/elder004.png",
    id: "윤준학"
  },
  {
    photo: "../img/about/elder005.png",
    id: "윤석록"
  },
]

const Profiles = ({title}) => {
  return (
    <>
      <div className="container mx-auto md:px-16 py-8">
        <h3 className="text-orange-300 font-bold pb-6">{title}</h3>
        <div className="flex">
          {
            images.map((item) => {
              return (
                <div key={item.id} className="px-6 pb-6">
                  <div className="w-48">
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="w-48 text-center">
                    <h4>{item.id}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="border-b-2 border-gray-400" />
      </div>
    </>
  )
}

export default Profiles