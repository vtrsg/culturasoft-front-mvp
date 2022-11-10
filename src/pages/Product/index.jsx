import React from "react";
import { useParams } from "react-router-dom";
import { ProductPage } from "../Product/styled";
import andaimes from "../../media/andaimes.jpg"
import receptivo from "../../media/receptivo.jpg"

const Product = () => {
  const { id } = useParams();

  return (
    <ProductPage>
      <h3>Solução para {id}</h3>
      <div>
        {id === "andaimes" && (
          <p>
            Solução completa para controle dos ativos alocados, bem como sua
            medição.
          </p>
        )}
        {id === "receptivo" && (
          <p>
            Solução completa para controle do negócio de receptive services.
            Você terá todo o controle dos serviços realizados pela sua equipe
            (motoristas, guias e frotas) e também dos terceirizados.
          </p>
        )}
      </div>
      <div>
        {id === "andaimes" && (
          <img src={andaimes} alt="" />
        )}
        {id === "receptivo" && (
          <img src={receptivo} alt="" />
        )}
      </div>
    </ProductPage>
  );
};

export default Product;
