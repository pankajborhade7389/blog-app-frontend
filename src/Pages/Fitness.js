import React, {useEffect,useState  } from 'react'
// import React, { useContext } from 'react'

// import { store } from './Detail'
import CardOne from '../Component/CardOne'
import CardTwo from '../Component/CardTwo';

const Fitness = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url ="https://blogprojectbackend.herokuapp.com/api/blogdata";
        fetch(url).then(res => res.json()).then(res => setData(res))
      }, [])
    // const [detail] = useContext(store);
    // console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Fitness</h1>
            <h1 style={{ margin: "20px 0px 20px 41.9%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        // detail.filter((article) => { return article.category === "Fitness" }).map((n) => (
                        //     <CardOne
                        //         articleid={n.id}
                        //         imgUrl={n.Image}
                        //         title={n.title}
                        //         description={n.description.slice(0, 400)}
                        //         category={n.category}
                        //         author={n.author}
                        //     />
                        // ))
                        data.filter((article) => { return article.category === "Fitness" }).map((res) => (
                            <CardOne
                            articleid={res.id}
                                    imgUrl={res.Image}
                                    title={res.title}
                                    description={res.description.slice(0, 400)}
                                    category={res.category}
                                    author={res.author}
                            />))
                    }
                </div>

                <div className="sidebar">
                    {
                        // detail.filter((article) => { return article.category === "Fitness" }).map((n) => (
                        //     <CardTwo
                        //         articleid={n.id}
                        //         imgUrl={n.Image}
                        //         description={n.description.slice(0, 200)}
                        //         title={n.title.slice(0, 35)}
                        //         category={n.category}
                        //         author={n.author}
                        //     />
                        // ))
                        data.filter((article) => { return article.category === "Fitness" }).map((res) => (
                            <CardTwo
                            articleid={res.id}
                                   imgUrl={res.Image}
                          description={res.description.slice(0, 200)}
                           title={res.title.slice(0, 35)}

                          category={res.category}
                          author={res.author}
                            />
                            ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Fitness