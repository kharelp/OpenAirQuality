
/*

Jack's code


Two gas sensors:

Ozone (MICS 2614)

O3 plug into A0


Carbon monoxide (MICS 5524)

CO plug into A1


Temp & RH

White wire: 3.3v

Green wire: Digital Pin 2 


*/


#include <DHT22.h>



#define DHTPIN 2

DHT22 myDHT22 (DHTPIN);


// the setup routine runs once when you press reset:

void setup() {

  // initialize serial communication at 9600 bits per second:

  Serial.begin(9600);

  Serial.println("O3(ppb)_D   CO(ppm)_D     Temp(degC)   Humidity (%)"); 

}


void logSensorReadings() {

// print temperature and humidity

    DHT22_ERROR_t errorCode;

    errorCode = myDHT22.readData();


#if LOG_TO_SERIAL

    Serial.print(myDHT22.getTemperatureC()); Serial.print(", ");

    Serial.print(myDHT22.getHumidity()); Serial.print(", ");

#endif

}



void loop() {

  double sensorValue0 = (double)(analogRead(A0)) * (5.0 / 1023.0) ;

  double sensorValue1 = (double)(analogRead(A1));



  

  float voltage0 = (-85.619 * sensorValue0) + 326.01;


  

 float voltage1 = 0.8113 * pow(2.71828, (0.0067 * (sensorValue1)));


  

 Serial.println("    ");

  

  Serial.print(voltage0);

  

 Serial.print("     ");

  

  Serial.print(voltage1);


Serial.print("       ");




      DHT22_ERROR_t errorCode;

    errorCode = myDHT22.readData();


    Serial.print(myDHT22.getTemperatureC()); Serial.print(", ");



Serial.print("       ");


    

    Serial.print(myDHT22.getHumidity()); Serial.print(", ");


     delay(5000);

}


