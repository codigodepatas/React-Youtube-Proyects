// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Bienvenido, {
  subscriberName,
  stack,
} from "../src/components/Bienvenido.jsx";

configure({ adapter: new Adapter() });

describe('01 | Componente "Bienvenido"', () => {
  const wrapperBienvenido = shallow(<Bienvenido />);
  const divBienvenido = wrapperBienvenido.find("div");

  it("Renderiza el componente ", () => {
    expect(wrapperBienvenido).toBeTruthy();
  });

  it("Debe contener una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(divBienvenido).toHaveLength(1);
  });

  it("Debe renderizar el tíulo con un tag 'h1'", () => {
    const h1 = divBienvenido.find("h1");
    expect(h1.length).toBe(1);
  });

  it("Debe renderizar una etiqueta 'h2' en donde su texto corresponda a la constante 'subscriberName'", () => {
    const h2 = divBienvenido.find("h2");
    expect(h2.length).toBe(1);
    expect(h2.text()).toBe(subscriberName);
  });

  it("Debe renderizar una etiqueta 'ul'", () => {
    const ul = divBienvenido.find("ul");
    expect(ul.length).toBe(1);
  });

  it("Debe renderizar una etiqueta li por cada stack", () => {
    const ul = divBienvenido.find("ul");
    const li = ul.find("li");
    stack.length > 5
      ? expect(li.length).toBe(stack.length)
      : expect(li.length).toBe(5);
  });
});
