model TestModel
  Real x(start = 0, fixed = true);
  parameter Real a = 0;
  parameter Real b = 0;
  parameter Real c = 0;
  parameter Real d = 0;
  parameter Real e = 0;
  parameter Real f = 0;
  parameter Real g = 0;
  parameter Real h = 0;
  parameter Real i = 0;
  parameter Real j = 0;
  parameter Real k = 0;
equation
  der(x) = 1;
end TestModel;