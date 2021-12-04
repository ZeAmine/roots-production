import React, { useEffect, useRef, useState} from 'react';
// import Background from '../../../public/assets/imgs/gray_vector.svg';
import "./Welcome.css"
import Tilt from 'react-parallax-tilt';

const Welcome = () => {
const img = useRef(null)
const [offset, setOffset] = useState(0);
const [arrow, setArrow] = useState(false);
let test = 0

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset); 

// const [hover, setHover] = useState(false)

    return (
        <body className="body-welcome">
             <div className="content_welcome">
                <div className="title_artist">
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
                    >
                        <div className="drive-text">
                            <span>Propulsez</span> 
                        </div>
                        <div className="artist-text">
                            <span>votre <span className="italic">artiste</span></span>
                        </div>
                        <div className="favorite-text">
                            <span>préféré</span>
                        </div>
                    </Tilt>
                </div>  
                                    
                <div className="albums inner-element">
                    <div className="first-row">
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/XXIVAlbum.png"} alt="XXIV Album" className="XXIVAlbum inner-element"/>
                    </Tilt>
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
    
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/platypusAlbum.png"} alt="Platypus Album" className="platypusAlbum inner-element"/>
                    </Tilt>
                    </div>
                    <div className="second-row">
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
    
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/faceAlbum.png"} alt="Vertigo Album" className="faceAlbum inner-element"/>
                    </Tilt>
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
    
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/donutAlbum.png"} alt="Donut Album" className="donutAlbum inner-element"/>
                     </Tilt>
                    </div>
                </div>
                {/* </Tilt> */}
                <a className="progress" href="#">
                    <div className="waves_button">
                        <div className="wave"
                         style={{
                             height: "31px"+ offset
                          }}></div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "assets/imgs/arrow_vector.svg"} alt="arrow" className="arrow"/>
                </a>
            </div>
            <p>
                <p>Lorem ipsum dolor sit amet. Cum vero molestiae et suscipit dolor eos aspernatur nihil est accusamus eius ut voluptatem quis! In rerum blanditiis aut illo aperiam et quia nesciunt sit asperiores alias ea ullam maxime 33 rerum quia! </p><p>Eos dolore inventore qui nostrum quae a maxime eaque eum cupiditate voluptatem. Cum dolores placeat cum molestiae perspiciatis in ratione repellendus. </p><p>Ea vitae molestiae qui dignissimos commodi aut quam saepe est reiciendis quis est iste pariatur ut quasi commodi qui ipsam ducimus. Eos atque voluptas hic nesciunt quos nam Quis rerum eos aspernatur sequi quo nobis molestias et deleniti consequatur sit laboriosam perferendis. </p><p>Et temporibus corporis sit quis neque ut praesentium magnam id quasi consequatur et cupiditate ipsam et optio similique ut illo atque. Aut dolores fugiat et assumenda inventore ut optio exercitationem ut beatae suscipit. Qui accusantium iste vel dolores perferendis et quia cupiditate! Et atque quidem sit totam atque sed explicabo iusto ab vero deleniti aut vero earum. </p><p>Ad tempore galisum ut pariatur libero ut sequi provident ad aliquid impedit aut recusandae voluptas. Sit consequatur voluptate et perspiciatis beatae non  numquam qui voluptatem animi non quia dicta hic alias sint. Et maiores explicabo sit nihil optio et ratione culpa aut possimus temporibus. Sit sint consequatur non nesciunt laboriosam quo doloribus nisi qui veritatis molestiae aut quia eaque et nisi amet qui facere voluptatem. </p><p>Et quam veniam aut facilis explicabo et tempore aliquam ut nihil animi sed quaerat enim. Cum odio aspernatur aut harum illo est enim autem  laborum nostrum in quidem eveniet qui magni dolores ut aliquid repudiandae. Id alias dignissimos et eius laborum et voluptatem odio At sequi voluptatem ut optio quam. Quo molestiae eaque At voluptatibus voluptatem quo obcaecati maxime et dolore ipsa ut cupiditate animi sit dolorum galisum ut modi nostrum. </p><p>Ut corporis omnis  dicta aspernatur quo velit possimus vel commodi iusto vel iure voluptates? Eum voluptatem minima ut doloremque quae vel mollitia commodi. Sed quod provident aut dignissimos ratione a sapiente consequatur quo omnis dolore. </p><p>Est eius quia ex exercitationem itaque et facilis dolores et facilis voluptatum. Aut galisum consequatur non quisquam magnam sit fugit iure qui tempora veritatis. Eos placeat velit non veritatis amet in error sunt est modi ipsum est voluptates impedit non fugiat voluptatem ut dolore minima. Qui eveniet dicta  dicta galisum aut beatae fuga sit Quis sunt. </p><p>Aut sapiente voluptas et quae ipsa et quia unde sed dolorum nobis. Ut quis distinctio ex internos dolores sed repellat provident qui eligendi sunt sed aliquam odio rem illo voluptates? Ea galisum omnis a architecto quia est provident dolores aut illum exercitationem. </p><p>Ut consequuntur unde vel cupiditate debitis aut sint culpa quo sint magni ab accusamus laborum ab natus esse vel sunt corporis. Ut perspiciatis esse et repellat nesciunt et modi quisquam et inventore velit qui quasi illum qui nihil sequi non animi culpa! </p><p>Et veritatis sapiente et perspiciatis consequatur rem vitae cumque id voluptates ipsa et laboriosam reprehenderit aut dolore eius et exercitationem magnam. Quo mollitia omnis ex possimus quia et error asperiores non officiis deleniti ab iste maxime. Est obcaecati harum non tempora eaque rem quidem enim in architecto dignissimos ut placeat impedit qui delectus recusandae eos cupiditate officiis. At sint odit a repellendus voluptatibus eos voluptas consequatur  natus animi. </p><p>Ex nemo facere vel dicta blanditiis qui quae nobis ut fuga incidunt 33 voluptate libero et maiores eveniet ut iste dolores. Sit sunt galisum ut facilis consequatur sit harum voluptatibus in doloremque quasi! </p><p>Sit dolorum laborum est consequatur sunt id consequuntur velit. Et asperiores architecto et nemo dolores vel dolore obcaecati. Ad temporibus magni At enim neque ex pariatur odit aut similique quia quo inventore dignissimos est officiis facere. </p><p>A facere totam vel amet incidunt et voluptas voluptate qui modi explicabo aut minus minus nam consequatur officiis a deserunt quisquam. Ex molestiae corporis ea ducimus placeat sit possimus optio cum eligendi quos qui quas eaque eum accusamus vitae. Ut doloremque sequi qui fugit quia et accusantium sapiente sed laudantium illum. </p><p>Ut modi eveniet eum illum illum quo deserunt eveniet et ratione distinctio. Ad molestias dignissimos sed galisum magni hic consequatur quod quo fuga suscipit sed sapiente repellat ad tempora illo eum labore dignissimos. Ut tempora voluptas et consequatur earum sit modi voluptatem eum nihil debitis vel quidem voluptate qui  itaque. Non tenetur exercitationem rem  sapiente vel beatae temporibus ut beatae adipisci nam ullam omnis eum vero fugit! </p><p>Rem blanditiis recusandae quo blanditiis nobis in quia sint et laborum laboriosam? Et quasi corrupti ut culpa atque et atque numquam. </p><p>Et voluptates voluptatibus nam molestiae placeat et quis laudantium. Ab officiis rerum vel laborum nemo eos voluptas dignissimos! Est repellendus dolorum non numquam officia ea reprehenderit dolores a corporis repellendus est expedita impedit et praesentium officiis. Ut cumque iste id internos fuga quo culpa officia quo itaque nulla ea doloremque illum. </p>
                <p>Lorem ipsum dolor sit amet. Cum vero molestiae et suscipit dolor eos aspernatur nihil est accusamus eius ut voluptatem quis! In rerum blanditiis aut illo aperiam et quia nesciunt sit asperiores alias ea ullam maxime 33 rerum quia! </p><p>Eos dolore inventore qui nostrum quae a maxime eaque eum cupiditate voluptatem. Cum dolores placeat cum molestiae perspiciatis in ratione repellendus. </p><p>Ea vitae molestiae qui dignissimos commodi aut quam saepe est reiciendis quis est iste pariatur ut quasi commodi qui ipsam ducimus. Eos atque voluptas hic nesciunt quos nam Quis rerum eos aspernatur sequi quo nobis molestias et deleniti consequatur sit laboriosam perferendis. </p><p>Et temporibus corporis sit quis neque ut praesentium magnam id quasi consequatur et cupiditate ipsam et optio similique ut illo atque. Aut dolores fugiat et assumenda inventore ut optio exercitationem ut beatae suscipit. Qui accusantium iste vel dolores perferendis et quia cupiditate! Et atque quidem sit totam atque sed explicabo iusto ab vero deleniti aut vero earum. </p><p>Ad tempore galisum ut pariatur libero ut sequi provident ad aliquid impedit aut recusandae voluptas. Sit consequatur voluptate et perspiciatis beatae non  numquam qui voluptatem animi non quia dicta hic alias sint. Et maiores explicabo sit nihil optio et ratione culpa aut possimus temporibus. Sit sint consequatur non nesciunt laboriosam quo doloribus nisi qui veritatis molestiae aut quia eaque et nisi amet qui facere voluptatem. </p><p>Et quam veniam aut facilis explicabo et tempore aliquam ut nihil animi sed quaerat enim. Cum odio aspernatur aut harum illo est enim autem  laborum nostrum in quidem eveniet qui magni dolores ut aliquid repudiandae. Id alias dignissimos et eius laborum et voluptatem odio At sequi voluptatem ut optio quam. Quo molestiae eaque At voluptatibus voluptatem quo obcaecati maxime et dolore ipsa ut cupiditate animi sit dolorum galisum ut modi nostrum. </p><p>Ut corporis omnis  dicta aspernatur quo velit possimus vel commodi iusto vel iure voluptates? Eum voluptatem minima ut doloremque quae vel mollitia commodi. Sed quod provident aut dignissimos ratione a sapiente consequatur quo omnis dolore. </p><p>Est eius quia ex exercitationem itaque et facilis dolores et facilis voluptatum. Aut galisum consequatur non quisquam magnam sit fugit iure qui tempora veritatis. Eos placeat velit non veritatis amet in error sunt est modi ipsum est voluptates impedit non fugiat voluptatem ut dolore minima. Qui eveniet dicta  dicta galisum aut beatae fuga sit Quis sunt. </p><p>Aut sapiente voluptas et quae ipsa et quia unde sed dolorum nobis. Ut quis distinctio ex internos dolores sed repellat provident qui eligendi sunt sed aliquam odio rem illo voluptates? Ea galisum omnis a architecto quia est provident dolores aut illum exercitationem. </p><p>Ut consequuntur unde vel cupiditate debitis aut sint culpa quo sint magni ab accusamus laborum ab natus esse vel sunt corporis. Ut perspiciatis esse et repellat nesciunt et modi quisquam et inventore velit qui quasi illum qui nihil sequi non animi culpa! </p><p>Et veritatis sapiente et perspiciatis consequatur rem vitae cumque id voluptates ipsa et laboriosam reprehenderit aut dolore eius et exercitationem magnam. Quo mollitia omnis ex possimus quia et error asperiores non officiis deleniti ab iste maxime. Est obcaecati harum non tempora eaque rem quidem enim in architecto dignissimos ut placeat impedit qui delectus recusandae eos cupiditate officiis. At sint odit a repellendus voluptatibus eos voluptas consequatur  natus animi. </p><p>Ex nemo facere vel dicta blanditiis qui quae nobis ut fuga incidunt 33 voluptate libero et maiores eveniet ut iste dolores. Sit sunt galisum ut facilis consequatur sit harum voluptatibus in doloremque quasi! </p><p>Sit dolorum laborum est consequatur sunt id consequuntur velit. Et asperiores architecto et nemo dolores vel dolore obcaecati. Ad temporibus magni At enim neque ex pariatur odit aut similique quia quo inventore dignissimos est officiis facere. </p><p>A facere totam vel amet incidunt et voluptas voluptate qui modi explicabo aut minus minus nam consequatur officiis a deserunt quisquam. Ex molestiae corporis ea ducimus placeat sit possimus optio cum eligendi quos qui quas eaque eum accusamus vitae. Ut doloremque sequi qui fugit quia et accusantium sapiente sed laudantium illum. </p><p>Ut modi eveniet eum illum illum quo deserunt eveniet et ratione distinctio. Ad molestias dignissimos sed galisum magni hic consequatur quod quo fuga suscipit sed sapiente repellat ad tempora illo eum labore dignissimos. Ut tempora voluptas et consequatur earum sit modi voluptatem eum nihil debitis vel quidem voluptate qui  itaque. Non tenetur exercitationem rem  sapiente vel beatae temporibus ut beatae adipisci nam ullam omnis eum vero fugit! </p><p>Rem blanditiis recusandae quo blanditiis nobis in quia sint et laborum laboriosam? Et quasi corrupti ut culpa atque et atque numquam. </p><p>Et voluptates voluptatibus nam molestiae placeat et quis laudantium. Ab officiis rerum vel laborum nemo eos voluptas dignissimos! Est repellendus dolorum non numquam officia ea reprehenderit dolores a corporis repellendus est expedita impedit et praesentium officiis. Ut cumque iste id internos fuga quo culpa officia quo itaque nulla ea doloremque illum. </p>



            </p>
        </body>
    );
}

export default Welcome;