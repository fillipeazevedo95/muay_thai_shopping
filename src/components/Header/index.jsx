import React, { Component } from "react";
import './style.css'

class Header extends Component {
    render(){
        return(

            <section className="sec">
                <header>
                <a href="#"><img src="https://img.freepik.com/vetores-premium/muay-thai-saudacao-de-lutador-posando_9645-2313.jpg?w=2000" className="logo"/></a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                </header>
                <div className="content">
                    <div className="textBox">
                        <h2>Melhor conforto e<br/><span>Qualidade</span></h2>
                        <p>Aqui você encontra as melhores luvas, de qualidade imensurável para fazer dos
                            seus treinos os melhores e mais confortaveis de todos, venha conhecer nossa loja
                            com preços acessíveis e com atendimento imediado! </p>
                        <a href="#">Ver todos os produtos</a>
                    </div>
                    <div className="imgBox">
                        <img src="https://cdn.shopify.com/s/files/1/0512/3237/4993/products/fb6c0ba1445829271969b1d50c32d93e_48a634b7-bffe-48c0-926d-04bb7f33a016.png?v=1648145436" className="luva" />
                    </div>
                </div>
                <ul className="thumb">
                    <li><img src="https://cdn.shopify.com/s/files/1/0512/3237/4993/products/fb6c0ba1445829271969b1d50c32d93e_48a634b7-bffe-48c0-926d-04bb7f33a016.png?v=1648145436" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/0512/3237/4993/products/87e3be79e3300faaf9a587ec63f6e441.png?v=1625749768" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/0512/3237/4993/products/BLACK-LINE-GOLD-07.png?v=1623242080" /></li>
                </ul>
                <ul className="sci">
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" /></a></li>
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" /></a></li>
                    <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" /></a></li>
                </ul>
            </section>
        )
    }
}

export default Header