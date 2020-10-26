model bernulli
  import SI =  Modelica.SIunits;
  constant Real pi = Modelica.Constants.pi;
  parameter Modelica.SIunits.Density rho = 1000;
  parameter Modelica.SIunits.Acceleration g = Modelica.Constants.g_n;
  parameter Modelica.SIunits.Pressure p1 = 200000;
  parameter Modelica.SIunits.Velocity v1 = 1;
  parameter Modelica.SIunits.Radius r1 = 0.1;
  parameter Modelica.SIunits.Area s1 = pi*r1^2;
  parameter Modelica.SIunits.Height h1 = 0;
  //to be controlled:
  parameter Modelica.SIunits.Height h2 = 0;
  parameter Modelica.SIunits.Radius r2 = 0.1;
  parameter Real k1 = 0.40;
  parameter Real k2 = 0.63;
  parameter Real rLin1 = 1.85;
  parameter Real rLin2 = -1.85;
  parameter Real hLin1 = 3.88;
  parameter Real hLin2 = 3.88;
  //to be calculated:
  Modelica.SIunits.Area s2;
  Modelica.SIunits.Pressure p2;
  Modelica.SIunits.Velocity v2;
  Real connPos1, connPos2;
equation
  connPos1 = k1 + rLin1*r2 + hLin1*h2 + sin(time)*1e-12;
  connPos2 = k2 + rLin2*r2 + hLin2*h2 + sin(time)*1e-12;
  s2 = pi*r2^2 + sin(time)*1e-12;
  v1*s1 = v2*s2;
  1/2*rho*v1^2 + p1 + rho*g*h1 = 1/2*rho*v2^2 + p2 + rho*g*h2;
   

   
end bernulli;