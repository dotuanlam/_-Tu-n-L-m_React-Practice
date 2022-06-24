import React from "react";
import { Row, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { customers } from "./customers";
const { Meta } = Card;
const CardView = () => {
  return (
    <div>
      <Row justify="center" span={24}>
        {customers.map((item) => (
          <div key={item.id}>
            <Card
              style={{
                width: 300,margin:'1rem',
              }}
              cover={
                <img
                  style={{ width: "5rem", margin: "1rem auto" }}
                  alt="example"
                  src={
                    item.gender === "male"
                      ? "https://www.shareicon.net/data/512x512/2016/07/26/802009_man_512x512.png"
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABa1BMVEXx8fH///8aa4hJLh/tvYjgpGslpa85IRgtur/z8/P29vbouIT8/Pz4+PjwwIpKLx87GQAAY4I8IBTDm3M5FABDJRQ9HAAAYIBGKhrGvbYko64ZZ4Y7FwDkpGkhgZcmqbJAIQw3CwDX0MqGdGZuVkd4amPl7O0xGBFAJxsdc43opGaklotcQS8+FADi3tpCHwDWqnszAACto52am5hTOi6lgmK4kGjJ19x1n68kmaaFoJXToHGivsqwsa6SgXd7Z1pcSkGQiYXFw8BsXlZWOym5r6bT1taCd29KKAqKZkeFalR8XUWGZEdXRDmXemFyTzV8Y1DAlGlTMxyoiWtmSje3h1saAADerXorFBKeelk0IB1HNS4lBgCPZkJ4eHrxxZbhxq0uEADhwZ+o1NeumHhzj45npa9gwseMk4ZRkZm71tesmIBNur+AxcmOqpqtyc+nqI1kkKJprqpAfpROp6mCrrdmj6LY7vCu2N0e0OL/AAASRUlEQVR4nN2di1vbRrqHZRmwR1giNsFW7WA7lBgbqENJGkNDLhAS0k3TSzbdkC09u5x22yablrAOp/vnnxnJsm4jaeb7xsDT37PtPk2MmNffdUYjjZY7H5WoTNMwTPdf9L/O6RfntMlenmIZBiEaV4TKnDjq5AgpWxJajJQadWLjmAyhaQrCBTCNCVGqJyyZsnC+jAlAKiYsGWA6z5aqTamSEI83CUhlhDSvqOFTDamIUCneCFIRowrCkno8l9FQMDgFhJPic6TAWbGEE+VjQhcQHOHE+RzGiyM8Fz40I5zw3PiYzPMnVFXdhQUORyChec58Grw+ggjP1UF9wcIRQnjeDuoLYkZ5wgsyoCuAGaUJLyACg5KPRknC0sXyMcmaUY7wgg3oStKMUoQXl2LCkkKUILzQFBOWTIsjTngpPNQTmQDhpQKUQRQlvCwh6Es0GAUJVYQgIcS5b+Eoea1fNaIYIR6QGKbW37u3dv/gBtXB/bV7S30DuT4nlm+ECJGAlM5Y2nzwfKFabS+M1K7enHv44F4fBSmEKECIrBLE0D56YFerC3Y+Inuh2l5fw0CK9DfZhChAYpCl3U+uLEThfMr29Rt7GjgoBRAzCTGA1HyPH11tJ+K5Wrj6/HEfGpTZjppFiAE0yOOH15LNFzBkdX//0cc0KAG/LNOKWYRwQFLaW6/GYo+v9TmbBqW9uwRgzELMIAQDEqP/6LogXz4/5/5f++quJt9aZDhqOiEcUNtsi/jnSPsjxHz76Z58OKYjphJC+TSz/6gqzheUfXVTMWIaIbQXJaXHCxIGjOjamnwwpjVwKYTQ2QQxdq8JRyAP8b78bwYRggG1ZaCHerp+SyVi4l9B15yM/npWic/S3NV70ojJNSORENpGPdmHh6An+0VfXbZJIgRmGePJHCYEPS08kG9Uk7JNAiEwCI0ntgrAfJ7WDOlfLkUIDELSv60GMJ+/Ke+nCaHIJwQCasv4GBypfSDvRvxQ5BJCffQAWSaCui5vRH4o8giBPmpuXlMHmF8AGJG7xMgjhBUK8gRbB8NqP5EfB89POYSwQkG0R8qC0CU8AAyE46dxQqCPGpsKg9DRHCASOX4aJwT6aOemYsB8dQ2Q8eJ+GiME5lHzY7VRSGU/1ADfdiYhuNZ/qhqQNjaAXBOv+1FCYD9q3lebZhy170NGE002EUKwCeeyB5yibpf7x08hhNFkEyEEzplMVCLtdl9/wUW8ugQZTymNEGpCDdFx290fZq3ZAu+v2ruQvEfSCKHT3j1wv2Z3/7JhTU1Zn1V4f7kPyuylZELoygW5AcwzduXZhkUBqdZ5XlAFuSlJJgSaEFrt7ZUx35Q1zzNi9R4ot5tJhODFJ1Cesbtfj/kY4pecZLPwAOSmJIkQuoZvPJLPM3bh67sBPkq4wSG0n0PamnAkBgjBUahdlearPA/zMcSvOIg3QYEYMmKAEGzCx7JOWnk+PxXhY4icTwIDMWhEDW1CzTyQy6SV/F+j9ktMNm3ACj8T4RHCtwu8kAnDyv5nXD6G+HXMT+1HwGGVOIRQQLJUFW9KKR/HP5OTjb0PmAYzGXFC8LYu455wGFbmPptN5GOIr2N+eg0yg2KKE4Kd1PxYMAzt4+9S+ahm96M/dGUPOp+LEoK3HhLyXCgMaQP6jww+XnvaXoM6V5QQ7KRkSWT5otv9aiOTjyG+jHxdC5AVN0elCCF8T4LAvKJb+VKIjxLejRjRXoYOzAwTwvfgG2tZNnT4xAAp4jcRIz6F9W1+SdSQTqqZGTOnbuVrcT6q2UjFuN6BulcpRAgGJNrDtERDJ4CxBjTDiJGKcW0PSmgGCeFOSvov0viW5+X4mMLJpvoYvOklSAh3UvIkeWJRWQfwTVnfhozYBtwNHqkUIAQDpkwsKrfvJDdoqYjLQSPCVqPcsfmEiKeZklJpZf8OwH4u4WzQiPYyvBnxCRHPUhi7PMLKOtB+LmIw2djr8NH5hJh9zsvxVGq/uJPVgGYomL2ewj3MHBPC+YjGSaXrSL5wsvkU0Y14hAgnJdr1GGD3CyTgVKhiwEu+66ZYwk6csPJXNKH1yu9sYDcvwoSY3ficvrsi2GWnIn5RUUFYwhMaH12JEd7eQAPS9vR2d8R45SNE0+wSYp7t5Sx32y/xJpxiteZbdxMghlBzCTFPFpq3YuXQfqaC0IF08g10yZSJuISYRwvNeMG3v1JCOOutvVXhjakTiBqu3psPYrPDyrdqCBniX6gR24A90SoJo+sqtBwqSKUO4ay7Co4iNBkh6iUCpXhL01WRSl3CKauCmlw4gYgljN8b3VeTaGYdI97O5xc+xhKiHtIuxVua9UtHiHpKm8QI1ZRDVYQ01eAIOW2p/Y2qRKOMEPUQbD+2StN9rZKwe+GES3HC75QRTk29qqCWMTRWLjTE9JdLWLmjjtC6gyY0LjMhm0N1FRCiyiFn8lSZV0HoOqmzwo8jJJeYcGTCPy8hW8pwy8+flJD+Yz1zFmtw1YISopq2iRFO+Xe8cYTa5SW0vlvJqyFEtaUTI7Ssz0aAf05Cy9pYHq8m/hm91LrzTeBRVOjWtktMaH37t9ANRMwqxiUlXF+ZU0l46eLQmj8sBAmrt1BDnAAhtvO2nq2ECRErwtokvBS7imG9KhS6l4eQM3vKr+Dc1PpypRDaNIS6b8EIUX0ph3CugDKi9eqwoJIQ23nzCLuHmGV9a3klQoi5fzgRwnx35XsE4PxRoRB+ygtNiFvFiK+15fOFI/hym3W7ECME7vR2hV6n4dzGzxcKh9CbM9brwxghZqeCa0PUz/MJV4DJxtqoFGKEn6JSqYkk1EzOA850iEewsm+9XGGAoXKYv4nKFGhCzp0ZRlj4O8RPrddHhTjhC9zNMTRhPNPMdekgV9YBgBsuYJjQfom7OYa+uxa/Q+oQFg5/kDbi7PcuYDgMsUtt2DukZvzhVpewcCS9M+rZCo8Q8hYXpYScrYl5d5yHr+T2d391WOAR4qaHDiGqIKYQFgoyiNZ3R96PhRMNYhe05uxOxO7F4G2gHY105bb4Lkzrzt8KY4UI4TvZnfFNlFACkc3rxwo/cIGbWpTQu76M+K4vOn+SRbTmV3zAyNsV4M9bMOH3tfEeVPcJBRGtOwELRglxbamCvYnchxECiIXs5sZrZbhhCH/uyRneZPaXBglp/5ZRF62pZ2HACOELDOFofylmvwn/kZnQgI9+mE0D3Ng/DAOGE439EkNYUrDPu89pvf1kenx0dPPR/2z+I5nwnzf2j46OjhMJF25gUqm3zxsRiLy9+m6qOT46Xrhx66OOYRhmfzqB71Wf/jVZ2tydOx5Thp0Uu29PxfMWnILYPTr+nr1inZ1iwT70z8VpnqfOTq+y15QSdthx/97B99eP44TXMC3N+HkLVCD2D+KvRZ7bXCL+a/IJ+d/F6enpV7NRvunp1YH3KXb+xdL950fH4akT/EFnppKKJ7vo0PaiZrRflvxXyBLy4/ZPjDAIOTvr/sHiv34eBL4JU9s7CC13P1zCHH8ReLIL1XxrRmf3k/Be6ECVNjq/1Jvz0wla/LXZ+i2QLImRe+p/UZ9C3kEfUJAQeUaH2b9xM8jo95Lkx2Kx2UwCnF78d3O7WPwjgDjOzXZ1+QnihG+m4BOW2KOOqKsuB855GCdABlhvvllNRLzbbBaLxbe+yb0usDq3iTOg5r1zAPsc8Hhoxt7BFS8e7XX3ggywuN38dTGRcLrJjOgjjuab7epaB2nAyHPAKk47Moyl3U+qtpMp2k4gGm/p4FvN5k/JhIv/coxYHAUu6eQp4cL1+30Fx2CHnuVWcyIXMTub+9U2hayy93UQBkhNmByGTiA2W/RT79x0Y9y7YrevHIAOK4kpFyJUdK4hYYZ8frNdpYFIOkWX8NfkMHQCkblp8TeHyVy+evuWGr7oOxWUHMrlXpgWtbWH69TL3jmEqU5Ka/7nLqGDSPaWH2tq+OJv/lB4cByr3H2N/OYMvNV8kwY4Pb3hBqKTbUhfU3cMfS5CqPb4Tdpq/lgcEaaa0DGi+0lWFtFnsfkyooTq3NS9/n9Hw26tpUWhozejjxZR6xVRlWKESo1oDLxRv8sEXJwff1YlYi5GqNKIPmCxeDeT8KfxZ3/BzOfDMjmE6s5wDAIW59PDkBL+XpwAYo5DiJtgjEVLYhCw+HuWm662Ap+mjoo/+lELvd8zQIgvGDSFap2zn4OAxXdZXjod+niruXXSwR9wyX1vIjbX0DLYGZwNa9vFsDLcdPF95PPNmn56NsAVxuBLvYPvL8UsZlC8k61euazXIwPOctPFD9EfaDYa5fKQQsK7m4T3l8JfYGpQvKZebuiNXis63uK7VBv6tcLXTEPX9XK5t3VimiB3Db2XPfQeYdALwg3S2RnWymxUjZCHtlr1OrNoRl9KP0g/1wp9NU12Nb1cK2+9hZxvWUoklE6nNLV0dk7LDp6uN8do29ut+swM/d/MTLH4n9S5BQOccVRvNeseZ6vnXFFv1Hpb0jEZfrV+mFDOiCz2TvURHiN01Os1qLZnvGGnFn1WDGc8bbMf7PXcq3gX1Z2YlArJlPd5yxiRBt9bmlrGeJ5Gf9Abj7uVZsTFd8WW98F6w79C+LJl/fSECBsycjpChFC0JjLv5OAFQJvjkdOCkQj43gds9ZKvRiF7Zx1BxtT36gsakRhPzmhhSFVj2xt7PdmIq+MgnJlppnxfDmNNjDF6wAXkBA/S2criY4gBP02o+tSEgSDMvGJZP8vuW2MnzcROLcn+lsigl81H5ftpK8mIPuBMqo+OGYeZE6zYQTMxwkwjEq2X/XUzBUORa8TV3/3voCl0Sb3czECMHxYUP3kmq2KYb4QsyBC3xxb6wDWiH4QCPjpCPE0fXwyHd6JVhgkHNcHBhEoGp7FZ/N0PQuFL6uWTNETOoV0cwnQ/NYbiown46Yc44d2xBcWC0PvaUvyUd/Aa79y1tC+JvBX1UQdx7Kf1f0cRVz/3g1DUR5nKO8nj4x2exz0dMCWYTQkThhA/xEwoUyiC6iUPjgfDJUz2UzKQGgwdjuenrfdhI67+BxCEjmonCRbgHg6YcIZloh8YZzJOqrNQTDDi3XGIygShc8lhQm/JP2s14XzSpG+pIzucQLYJTfbHJpQLQkc1fq5JOC838QTWBCcVLxVjxHGDGphFLf7kAUoGIRM/1ySdeZxEyA9FY0vSSR15VeFz34iLH+CAus510wSQ5DOdeRehDRtgPOPC37obM2EddEGdcyRE4vHqyUd2c3ydvJV3Uj2QbcZG9EwonWVccdw0+fz4lEPJ44jSmdRDHIVifdSAL76vQ7OMq9OohyWeyp1KGM82Juwr9xG93g2cRkeKdm7JJ6unE0azDdFATuqoHujdvH4NlGUclQdhwhSIVMJotiEnMCdl6gUa8FGxl+1lgoRnwUDk9zJChBFE42fwl+4h1mnvNir2dfi1aCASUcAMwjCiZNcd1qi3qa8ubrhBCI1pR8FATE6jIoTBDpV0MGPyED93TQjPMo5qfiBmAGYSBhAxYeggugn1vQLAQCBmAWYT+o4KrYYRRAcTCag3vOWaTEABwrEVzVPcqHS/Q4XXCU9NIggoQjhCBMycYurV4e12WO4MSgBQiNB1VDJAOqmjuhpAvcY2iYmMXYzQQcQmGkcNvd5CVHpf5R0iBihIyBBhc8OYekoA9cablGYbQpgrEfJ/CpxLmWpbggMXJszlFCQadSrvCI9bnLCkxktVqNwbCA9bgjCX27lospHKw47EqGUIcx39MphRPATlCXOlU/gcWJEaZQkPlSdknnqxZqydyngohDDXuUgzNiRyKJiQmjFtl8lEVZNKMXDCXGd4IWZs1OQNCCTM5U4uIBrlagSWMJc7a/Ya5+ms5aFkCkUT5v74Zbupnxdjubwj2mirI8zlBq369rkwlvUzmINiCXO5/7Zmtifej5d7P/+BGSSKkDFi15Sy+MrSJV4tYa50MqxNjrGsb0ETjDJCqsFpbTK1o4aKP4WEtAXYqinvAcq13gk4fwalhJDqZCiw5VRYDeqeCsznSBUhddazoRpvbdT005O0e55yUkdINfAevICrzPBUmc+RUkIq9nQJ2JTsEZITwWVQYakmpDIG7AEoSVvSHyif7qBLA0cTIGTqDM5Oe3pNJPs0KJs+3JoIHdOECJnMzmBna+hwUotGTNpwyGq13vB062SgNPAimiChK8p5snO2tTUc9iisq16PgW3tUDQicvsIpYkTBlUa6Tx/Z+7/AaOZmBs4dtgwAAAAAElFTkSuQmCC"
                  }
                />
              }
              actions={[
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar
                    src={
                      item.gender === "male"
                        ? "https://www.shareicon.net/data/512x512/2016/07/26/802009_man_512x512.png"
                        : "data:image/png;base64,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"
                    }
                  />
                }
                title={item.firstName + " " + item.lastName}
                description={item.city + ", " + item.state.name}
              />
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CardView;
