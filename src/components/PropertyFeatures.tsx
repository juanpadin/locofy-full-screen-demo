import { FunctionComponent } from "react";
import styled from "styled-components";
import InputText from "./InputText";
import Button from "./Button";
import FAVWhatsapp from "./FAVWhatsapp";

export type PropertyFeaturesType = {
  className?: string;
};

const Icons = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Ambientes = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  min-width: 82px;
`;
const IconsParent = styled.div`
  height: 28px;
  width: 112px;
  position: relative;
  display: none;
`;
const FeaturesIconsChild = styled.div`
  height: 4px;
  width: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro-100);
  display: none;
`;
const Icons1 = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const Dormitorios = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  min-width: 89px;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameChild = styled.div`
  width: 4px;
  height: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro-100);
`;
const FeaturesIconsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
`;
const Bao = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
`;
const Icons2 = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
`;
const Garage = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  min-width: 59px;
`;
const FeaturesIcons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const FeaturesContentChild = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FeaturesContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-3xs);
  gap: var(--gap-5xl);
`;
const Cod = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
  color: var(--button);
  display: inline-block;
  min-width: 59.7px;
`;
const Caractersticas = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--tab-size);
  }
`;
const EsteEsEl = styled.p`
  margin: 0;
`;
const AmpliosEspaciosLlenos = styled.li`
  margin-bottom: 0px;
`;
const AmpliosEspaciosLlenosDeLuz = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-2xl);
`;
const EsteEsElContainer = styled.div`
  position: relative;
  font-size: var(--tab-size);
  line-height: 164.9%;
  color: var(--medium-grey);
`;
const CaractersticasParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const MapIcon = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LocationMap = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const LocationDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const ScreenShot20231101At = styled.img`
  height: 260px;
  flex: 1;
  position: relative;
  border-radius: var(--br-base);
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  display: none;
`;
const ImageGalleryChild = styled.img`
  height: 64px;
  width: 64px;
  position: relative;
  z-index: 1;
`;
const ImageGallery = styled.div`
  align-self: stretch;
  height: 260px;
  border-radius: var(--br-base);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-47xl) var(--padding-314xl);
  box-sizing: border-box;
  background-image: url("/screen-shot-20231101-at-1647-1@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-147xl);
    padding-right: var(--padding-147xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Description = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  font-size: var(--font-size-xl);
  color: var(--dark-grey);
`;
const FeaturesContentParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const CalendarIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const TicketsIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LargeButtonIcon = styled.div`
  height: 20px;
  width: 79px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const Buttons = styled.div`
  width: 292px;
  border-radius: var(--br-5xs);
  background-color: var(--accentcolor);
  height: 50px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  text-align: center;
  color: var(--color-white);
  font-family: var(--font-source-sans-pro);
`;
const PrecioDeAlquier = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
  font-weight: 500;
`;
const Us = styled.b`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-11xl);
  color: var(--button);
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const RentalPrice = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Apartamento = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 88px;
`;
const PropertyType = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  min-width: 57px;
`;
const SpecSeparator = styled.div`
  width: 1px;
  height: 17px;
  position: relative;
  border-right: 1px solid var(--disabled-grey);
  box-sizing: border-box;
`;
const SpecItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const Ambientes1 = styled.div`
  flex: 1;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  min-width: 53px;
`;
const PropertySpecs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
  gap: var(--gap-sm-5);
  font-size: var(--inputs-size);
  color: var(--grey);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ContactIconChild = styled.img`
  height: 1px;
  width: 272px;
  position: relative;
`;
const ContactIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
`;
const Contactanos = styled.b`
  position: relative;
  font-size: var(--font-size-lg);
  display: inline-block;
  color: var(--dark-grey);
  min-width: 111px;
`;
const Price = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Nombre = styled.div`
  width: 65.1px;
  height: 12px;
  position: relative;
  line-height: 244.52%;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const Input1 = styled.input`
  width: 272px;
  border: none;
  outline: none;
  background-color: var(--color-white);
  height: 43px;
  box-shadow: 0px 0px 8px rgba(173, 173, 173, 0.25);
  border-radius: var(--br-4xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm-5) var(--padding-xs);
  box-sizing: border-box;
  font-family: var(--tab);
  font-size: var(--inputs-size);
  color: var(--grey);
  z-index: 1;
`;
const Telfono = styled.div`
  height: 12px;
  position: relative;
  line-height: 244.52%;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 65.1px;
`;
const FormFields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const ContactForm = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
  font-size: var(--inputs-size);
`;
const PricingDetails = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--details);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) var(--padding-4xl);
  gap: var(--gap-base);
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const WhatsappButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-4xl);
`;
const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-160xl);
  font-size: var(--tab-size);
  color: var(--color-dimgray);
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-70xl);
  }
`;
const PropertyFeaturesRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-150xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--inputs-size);
  color: var(--grey);
  font-family: var(--tab);
  @media screen and (max-width: 1200px) {
    gap: var(--gap-65xl);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-23xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-2xl);
  }
`;

const PropertyFeatures: FunctionComponent<PropertyFeaturesType> = ({
  className = "",
}) => {
  return (
    <PropertyFeaturesRoot className={className}>
      <FeaturesContentParent>
        <FeaturesContent>
          <FeaturesIcons>
            <IconsParent>
              <Icons alt="" src="/icons-1.svg" />
              <Ambientes>4 Ambientes</Ambientes>
            </IconsParent>
            <FeaturesIconsChild />
            <FrameParent>
              <IconsWrapper>
                <Icons1 alt="" src="/icons-2.svg" />
              </IconsWrapper>
              <Dormitorios>2 Dormitorios</Dormitorios>
            </FrameParent>
            <FeaturesIconsInner>
              <FrameChild />
            </FeaturesIconsInner>
            <FrameParent>
              <IconsWrapper>
                <Icons1 alt="" src="/icons-3.svg" />
              </IconsWrapper>
              <Bao>1 baño</Bao>
            </FrameParent>
            <FeaturesIconsInner>
              <FrameChild />
            </FeaturesIconsInner>
            <FrameParent>
              <IconsWrapper>
                <Icons2 alt="" src="/icons-4.svg" />
              </IconsWrapper>
              <Bao>800 m²</Bao>
            </FrameParent>
            <FeaturesIconsInner>
              <FrameChild />
            </FeaturesIconsInner>
            <FrameParent>
              <IconsWrapper>
                <Icons1 alt="" src="/icons-5.svg" />
              </IconsWrapper>
              <Garage>1 Garage</Garage>
            </FrameParent>
          </FeaturesIcons>
          <FeaturesContentChild loading="lazy" alt="" src="/vector-26.svg" />
        </FeaturesContent>
        <Cod>Cod: 245</Cod>
        <Description>
          <CaractersticasParent>
            <Caractersticas>Características</Caractersticas>
            <EsteEsElContainer>
              <EsteEsEl>
                Este es el lugar perfecto para aquellos que desean vivir en el
                centro de la acción, rodeados de restaurantes, tiendas, y todo
                lo que la ciudad tiene para ofrecer. Además, la seguridad y la
                comodidad son una prioridad aquí.
              </EsteEsEl>
              <EsteEsEl>&nbsp;</EsteEsEl>
              <AmpliosEspaciosLlenosDeLuz>
                <AmpliosEspaciosLlenos>{`Amplios espacios llenos de luz natural durante todo el día, creando un ambiente cálido y acogedor. `}</AmpliosEspaciosLlenos>
                <AmpliosEspaciosLlenos>{`Vistas panorámicas de la ciudad que te dejarán sin aliento en cada amanecer y atardecer. `}</AmpliosEspaciosLlenos>
                <AmpliosEspaciosLlenos>
                  Acceso a una piscina en la azotea para disfrutar de un
                  refrescante chapuzón con vistas inigualables.
                </AmpliosEspaciosLlenos>
                <AmpliosEspaciosLlenos>
                  Un gimnasio completamente equipado para mantenerte en forma
                  sin salir de casa.
                </AmpliosEspaciosLlenos>
                <AmpliosEspaciosLlenos>
                  {" "}
                  Zonas verdes y jardines comunes para relajarte y disfrutar de
                  la naturaleza en medio de la ciudad.
                </AmpliosEspaciosLlenos>
                <AmpliosEspaciosLlenos>
                  Estacionamiento privado para tu comodidad y seguridad.
                </AmpliosEspaciosLlenos>
              </AmpliosEspaciosLlenosDeLuz>
              <EsteEsEl>&nbsp;</EsteEsEl>
              <EsteEsEl>{`No pierdas la oportunidad de vivir la vida que siempre soñaste. Contáctanos hoy mismo para programar una visita y descubrir todo lo que este departamento tiene para ofrecer. `}</EsteEsEl>
            </EsteEsElContainer>
          </CaractersticasParent>
          <LocationDetails>
            <LocationMap>
              <MapIcon loading="lazy" alt="" src="/vector-26.svg" />
            </LocationMap>
            <Caractersticas>Ubicación</Caractersticas>
            <EsteEsElContainer>
              Situado en el corazón de la ciudad, este espacio te brinda la
              posibilidad de estar cerca de todo: A pasos de los mejores
              restaurantes, bares y cafeterías de la ciudad. Rodeado de tiendas
              y boutiques de moda, perfecto para los amantes de las compras.
              Cerca de parques y áreas verdes, ideales para relajarse, hacer
              ejercicio al aire libre o pasear a tus mascotas. Con acceso fácil
              y rápido al transporte público, lo que facilita tus
              desplazamientos por la ciudad.
            </EsteEsElContainer>
          </LocationDetails>
          <ImageGallery>
            <ScreenShot20231101At
              alt=""
              src="/screen-shot-20231101-at-1647-1@2x.png"
            />
            <ImageGalleryChild alt="" src="/group-14400.svg" />
          </ImageGallery>
        </Description>
      </FeaturesContentParent>
      <Pricing>
        <PricingDetails>
          <Buttons>
            <CalendarIcon alt="" src="/calendar.svg" />
            <TicketsIcon alt="" src="/tickets.svg" />
            <LargeButtonIcon>Buy Tickets</LargeButtonIcon>
          </Buttons>
          <Price>
            <RentalPrice>
              <PrecioDeAlquier>
                Precio de alquier de la propiedad
              </PrecioDeAlquier>
              <Us>U$S 200.000</Us>
            </RentalPrice>
            <PropertySpecs>
              <PropertyType>
                <Apartamento>Apartamento</Apartamento>
              </PropertyType>
              <SpecItems>
                <SpecSeparator />
              </SpecItems>
              <Bao>800 m²</Bao>
              <SpecItems>
                <SpecSeparator />
              </SpecItems>
              <Ambientes1>4 ambientes</Ambientes1>
            </PropertySpecs>
            <ContactIcon>
              <ContactIconChild alt="" src="/vector-26-1.svg" />
            </ContactIcon>
            <Contactanos>Contactanos</Contactanos>
          </Price>
          <ContactForm>
            <FormFields>
              <CaractersticasParent>
                <Nombre>Nombre</Nombre>
                <Input1 placeholder="Ingresá tu nombre" type="text" />
              </CaractersticasParent>
              <CaractersticasParent>
                <Telfono>Teléfono</Telfono>
                <Input1 placeholder="Ingresá tu teléfono" type="text" />
              </CaractersticasParent>
              <CaractersticasParent>
                <Nombre>Email</Nombre>
                <Input1 placeholder="Ingresá tu email" type="text" />
              </CaractersticasParent>
              <CaractersticasParent>
                <Telfono>Consulta</Telfono>
                <InputText property1="Default" />
              </CaractersticasParent>
            </FormFields>
          </ContactForm>
          <Button
            property1="Disabled"
            buttonAlignSelf="stretch"
            accesoClientes="Enviar"
          />
        </PricingDetails>
        <WhatsappButton>
          <FAVWhatsapp />
        </WhatsappButton>
      </Pricing>
    </PropertyFeaturesRoot>
  );
};

export default PropertyFeatures;
