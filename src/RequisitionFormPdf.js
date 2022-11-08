import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
 
} from "@react-pdf/renderer";

import Bloom from "./images/bloom.png";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10,
  },

  valueStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 2.5,
  },

  leftAttributeStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 2,
  },

  commonStyle: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",

    width: "25%",
  },
});

export default function SamplePdf() {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <Document>
        <Page style={styles.page} size="A4" wrap>
          {/* parent view */}
          <View
            style={{
              border: "1pt solid black",
              padding: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Image
                  src={Bloom}
                  alt="user Image"
                  style={{ width: 200, height: "auto" }}
                />
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "right",
                  fontSize: "11pt",
                }}
              >
                <View >
                <Text >Saguaro Bloom DiagnosticsLLC</Text>
                <Text style={{paddingLeft: '50px'}}>4165 N Craftsman Ct,</Text>
                <Text style={{paddingLeft: '48px'}}>Scottsdale, AZ 85251,</Text>
                <Text src = 'http://www.bloomsafely.com/' style={{paddingLeft: '48px'}}>www.bloomsafely.com</Text>
                </View>
              </View>
            </View>
            {/* <View>
            <Table>
  <Tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
        </tr>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
        </tr>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
        </tr>
    </Tbody>
</Table>

            </View> */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // textAlign: 'left',
                padding: 10,
                alignItems: "flex-start",
                fontSize: "11pt",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>Phone:<Text style={{textAlign: 'right'}}>23233232</Text></Text>
                <Text>Fax:<Text style={{textAlign: 'right'}}>23233232</Text></Text>
              </View>
              <View>
                <Text>CLIA Certification: 03D2188271</Text>
                <Text>Lab Director:   Jesse Greer, MD</Text>
              </View>
              <View>
                <Text>Federal Tax ID: 85-4289083</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                fontSize: "15pt",
              }}
            >
              <Text>COVID-19 TEST REQUISITION FORM</Text>
            </View>
            <View style={{ paddingTop: 5 }}>
              <View
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 3,
                }}
              >
                <Text style={{ fontSize: 11, textAlign: "left" }}>
                  PATIENT INFORMATION
                </Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Last Name:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Ram Raj</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <Text style={styles.textStyle}>First Name:</Text>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <Text style={styles.textStyle}>Middle Initial:</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Mailing Address:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>1 st street</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "12.5%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>City:</Text>
                </View>

                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Ch</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "12.5%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>State:</Text>
                </View>

                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Tn</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Zip Code:</Text>
                </View>

                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>60030</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "30%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Telephone:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>4268426842</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "70%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Email:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>kani1997mozhis@gmail.com</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "30%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Social Security Number:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>555544455</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "40%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Date of Birth:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>08/14/1983</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "30%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Gender:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Male</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 3,
              }}
            >
              <Text style={{ fontSize: 11, textAlign: "left" }}>
                INSURANCE INFORMATION
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Insurance Type:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Individual</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "35%" }}>
                <Text style={styles.textStyle}>Policy Holder Name:</Text>
              </View>
              <View style={{ ...styles.commonStyle, width: "40%" }}>
                <Text style={styles.textStyle}>Relationship to Patient:</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Policy Number:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>PL34535535</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <Text style={styles.textStyle}>Group Number:</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "80%" }}>
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      width: "30%",
                      height: 43,
                    }}
                  >
                    <Text style={styles.textStyle}>Patient Signature:</Text>
                  </View>
                  <View
                    style={{
                      width: "70%",
                      height: 43,
                    }}
                  ></View>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>
                    I authorize Saguaro Bloom Diagnostics to analyze the
                    specimen provided by me and report the result of such
                    analysis to the ordering Physician in conformance with
                    his/her order
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "20%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Date:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>12/22/2021</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 3,
              }}
            >
              <Text style={{ fontSize: 11, textAlign: "left" }}>
                REFERRING PHYSICIAN INFORMATION
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Referring Physician:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Cara Christ</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Title:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>MD MS, Director of ADHS</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Client ID:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>ADHS</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Mailing Address:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>
                    150 N 18th Ave, Suite 500
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "20%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>City:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Phoenix</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "15%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>State:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Arizona </Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "15%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Zip Code:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>85007-3247</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                Width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Telephone:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>(602) 542-1025 </Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Fax:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>(602) 542-0883</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>NPI</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>1639369036 </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "40%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Email:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>cara.christ@azdhs.gov </Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "60%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>DX Codes:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>z20.822</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "80%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Physician Signature:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>
                    Physicians and other authorized persons are required to only
                    order medically necessary tests supported by an ICD-10
                    diagnosis from the patient's medical record.
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "20%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Date:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>12/22/2021</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 3,
              }}
            >
              <Text style={{ fontSize: 11, textAlign: "left" }}>
                SPECIMEN INFORMATION
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Test Type:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>SARS-CoV2 RT-PCR</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Collection Date:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>12/22/2021</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Result Date:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>12/22/2021</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Test Identifier:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>TR-001842</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "25%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Specimen Accesioner:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Sonika Chapani</Text>
                </View>
              </View>
              <View style={{ ...styles.commonStyle, width: "50%" }}>
                <View style={styles.leftAttributeStyle}>
                  <Text style={styles.textStyle}>Sample Type:</Text>
                </View>
                <View style={styles.valueStyle}>
                  <Text style={styles.textStyle}>Nasal Swab</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                textAlign: 'left',
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "black",
                borderStyle: "solid",
                fontSize: 9,
                padding: 10,
                // alignItems: 'center',
                // justifyContent: 'space-between'
              }}
            >
              <View style={{paddingRight:4 }}>
                <Text>U07.1 </Text>
                <Text>Z20.822</Text>
                <Text>Z86.16</Text>
                <Text>J12.82</Text>
                <Text>M35.81</Text>
              </View>
              <View style={{paddingRight:8 }}>
                <Text>COVID-19</Text>
                <Text>Exposure to COVID-19</Text>
                <Text>Personal history of COVID-19</Text>
                <Text>Pneumonia due to COVID-19</Text>
                <Text>Multisystem Inflamatory Syndrom</Text>
              </View>
              <View style={{paddingRight:6 }}>
                <Text>Z11.52</Text>
                <Text>j96.0</Text>
                <Text>J98.8</Text>
                <Text>J80</Text>
                <Text>J22</Text>
              </View>
              <View style={{paddingRight:10 }}>
                <Text>Encounter for screening for COVID-19</Text>
                <Text>Acute respitory failure</Text>
                <Text>Other specifiec respitory disorders</Text>
                <Text>Acute respitory distress syndrome</Text>
                <Text>Unspecified acute lower respitory infection</Text>
              </View>
              <View style={{paddingRight:6 }}>
                <Text>J20.8</Text>
                <Text>J40</Text>
                <Text>R05</Text>
                <Text>R06.02</Text>
                <Text>R50.9</Text>
              </View>
              <View >
                <Text>Acute Bronchitis</Text>
                <Text>Bronchitis</Text>
                <Text>Cough</Text>
                <Text>Shortness of Breath</Text>
                <Text>Fever, unspecified</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
