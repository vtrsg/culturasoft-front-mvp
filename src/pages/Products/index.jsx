import React from "react";
import { Link } from "react-router-dom";
import { ProductsPage } from "../Products/styled";

const Products = () => {
  return (
    <ProductsPage>
      <h3>Produtos</h3>
      <p>
        A CulturaSoft comercializa o sistema SolERP que é um sistema de controle
        de informações para pequenas e médias empresas e que hoje conta com os
        seguintes módulos: Compras, Estoque, Faturamento, Financeiro, Fiscal e
        Visitantes. O sistem SolERP pode ser implantado em 60 dias (média para
        implantação padrão) e pode atender vários tipos de negócio. Destacamos
        nossa solução para receptivo e para aluguél de andaimes, como exemplos
        da versatilidade do nossa solução. Nossa empresa também trabalha sob
        demanda, ou seja, podemos conhecer a sua necessidade e oferecer uma
        solução eficiente e viável financeiramente personalizada de acordo às
        suas necessidades.
      </p>
      <div>
        <Link to="/produto/receptivo">
          <button>Receptivo</button>
        </Link>
        <Link to="/produto/andaimes">
          <button>Aluguél de Andaimes</button>
        </Link>
        <button>Solicite um orçamento</button>
      </div>
    </ProductsPage>
  );
};

export default Products;
