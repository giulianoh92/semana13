USE clinica;

CREATE TABLE MEDICO (
  matricula INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  especialidad VARCHAR(50) NOT NULL,
  observaciones VARCHAR(255)
);

CREATE TABLE PACIENTE (
  nss INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  domicilio VARCHAR(100) NOT NULL,
  codigo_postal INT NOT NULL,
  telefono VARCHAR(20),
  nro_historial_clinico INT UNIQUE NOT NULL,
  observaciones VARCHAR(255)
);

CREATE TABLE INGRESO (
  id_ingreso INT PRIMARY KEY,
  fecha_ingreso DATE NOT NULL,
  nro_habitacion INT NOT NULL,
  nro_cama INT NOT NULL,
  observaciones VARCHAR(255),
  nro_historial_paciente INT NOT NULL,
  matricula_medico INT NOT NULL,
  FOREIGN KEY (nro_historial_paciente) REFERENCES PACIENTE(nro_historial_clinico),
  FOREIGN KEY (matricula_medico) REFERENCES MEDICO(matricula)
);
