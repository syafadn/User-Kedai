import BannerBackground from "../assets/bg-atas.png";
import AboutBackground from "../assets/bg-bawah.png";
import { gql, useQuery } from "@apollo/client"
import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";
export const GetMenu = gql`
  query menu {
    menu {
      id
      nama
      kategori
      harga
      gambar
    }
  }
`
const Menu = () => {
    const { data } = useQuery(GetMenu)
    return (
        <div>
        <NavbarMenu />
        <div className="work-test" id="menu">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="">
                <h2>Our Menu's</h2>
            </div>
            <div className="work-section-bottom ">
                {
                    !data?
                    <p style={{textAlign: "center"}}>Loading...</p>:
                    data?.menu.map((item) => {
                      return(
                        <div className="work-section-info" key={data.title}>
                            <div className="info-boxes-img-container">
                                <img src={item.gambar} alt="" />
                            </div>
                            <h4>{item.nama}</h4>
                            <div className="secondary-button-price">
                                {item.harga}
                            </div>
                        </div>
                      )
                    })
                }
                <div className="about-background-image-container">
                    <img src={AboutBackground} alt="" width='300'/>
                </div>
            </div>
        </div>
        <div className="">
          <Footer />
        </div>
        </div>
    );
  };
  export default Menu;