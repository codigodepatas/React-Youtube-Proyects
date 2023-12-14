// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import isReact from "is-react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Bienvenido, { alerts } from "../src/components/Bienvenido.jsx";
import Botones from "../src/components/Botones.jsx";

configure({ adapter: new Adapter() });

describe('02 | Componente "Botones"', () => {
  const wrapperBienvenido = shallow(<Bienvenido />);
  const divBienvenido = wrapperBienvenido.find("div");

  const wrapperBotones = shallow(<Botones alerts={alerts} />);
  const divBotones = wrapperBotones.find("div");

  // it('Debe existir un componente de clase llamado "Botones"', () => {
  //   expect(wrapperBotones).toBeTruthy();
  //   expect(isReact.classComponent(Botones)).toBeTruthy();
  // });

  it("El componente Botones, debe renderizar una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(divBotones).toHaveLength(1);
  });

  it('Debe renderizar tres botones con el texto "Alerta 1", "Alerta 2" y "Alerta 3" respectivamente', () => {
    const botones = divBotones.find("button");
    const botonM1 = divBotones.find("button").at(0);
    const botonM2 = divBotones.find("button").at(1);
    const botonM3 = divBotones.find("button").at(2);
    expect(botones.length).toBe(3);
    expect(botonM1.text()).toBe("Alerta 1");
    expect(botonM2.text()).toBe("Alerta 2");
    expect(botonM3.text()).toBe("Alerta 3");
  });

  it("Los botones deben tener un evento onClick que ejecuten un alert con cualquier texto", () => {
    const botonM1 = divBotones.find("button").at(0);
    const botonM2 = divBotones.find("button").at(1);
    expect(botonM1.props().onClick).toBeTruthy();
    expect(botonM2.props().onClick).toBeTruthy();
  });

  it("Dentro del componente Bienvenido, debe renderizarse el componente Botones", () => {
    const botones = divBienvenido.find("Botones");
    expect(botones.length).toBe(1);
  });

  it('El componente Bienvenido, debe pasarle por "props" al componente Botones, el objeto alerts', () => {
    const componentBotones = wrapperBienvenido.find("Botones");
    expect(componentBotones.prop("alerts"));
    expect(Object.keys(componentBotones.prop("alerts")).length).toBe(3);
  });

  it("El primer botón debe mostrar un 'alert' con el texto que recibe el componente como propiedad 'alerts.texto1'", () => {
    const window = global;
    let alertText = "";
    window.alert = (text) => {
      alertText = text;
    };
    const botonM1 = divBotones.find("button").at(0);
    botonM1.simulate("click");
    expect(alertText).toBe(alerts.texto1);
  });

  it("El segundo botón debe mostrar un 'alert' con el texto que recibe el componente como propiedad 'alerts.texto2'", () => {
    const window = global;
    let alertText = "";
    window.alert = (text) => {
      alertText = text;
    };
    const botonM2 = divBotones.find("button").at(1);
    botonM2.simulate("click");
    expect(alertText).toBe(alerts.texto2);
  });
  it("El tercer botón debe mostrar un 'alert' con el texto que recibe el componente como propiedad 'alerts.texto3'", () => {
    const window = global;
    let alertText = "";
    window.alert = (text) => {
      alertText = text;
    };
    const botonM2 = divBotones.find("button").at(2);
    botonM2.simulate("click");
    expect(alertText).toBe(alerts.texto3);
  });
});
