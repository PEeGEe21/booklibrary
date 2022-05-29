import React from 'react'
import { Link } from 'react-router-dom'
import { BestSellingBooks } from '../data'

const CategoryIndex = () => {
  return (
    <>
        <h2 className="text-[22px]">Heyyyyy</h2>
            <div className="my-9">
                <p className="text-justify mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, placeat nemo. Fuga dolore dolores, numquam voluptates, est blanditiis soluta nam saepe temporibus voluptate, magni voluptas vel deserunt sunt provident eveniet aut quae? Possimus similique dolor at, placeat est dolorum sit cupiditate, officiis quia ad sint minima earum! Repellendus, magnam eos!</p>

                <p className="text-justify mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt nam facere excepturi delectus itaque, iusto iste, animi ipsum ducimus cupiditate. Ex voluptates, et cum facere, iusto eum sed similique voluptas cumque, nulla voluptatem mollitia consequatur nobis. Maxime nesciunt, ea temporibus, nisi exercitationem sapiente consequatur quisquam delectus neque laboriosam deserunt.</p>

                <p className="text-justify mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt nam facere excepturi delectus itaque, iusto iste, animi ipsum ducimus cupiditate. Ex voluptates, et cum facere, iusto eum sed similique voluptas cumque, nulla voluptatem mollitia consequatur nobis. Maxime nesciunt, ea temporibus, nisi exercitationem sapiente consequatur quisquam delectus neque laboriosam deserunt.</p>
            </div>

            <div className="my-9">
                <h3 className="text-justify mb-5 underline">Lorem ipsum dolor sit amet :</h3>

                <ul>
                    {BestSellingBooks.slice(0, 5).map((book, index)=>(
                        <li key={book.id} className="mb-3">
                            <Link to={book.id}>{book.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>


        
    </>
  )
}

export default CategoryIndex