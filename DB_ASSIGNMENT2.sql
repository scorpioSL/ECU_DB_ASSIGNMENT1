

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB_ASSIGNMENT2`
--

-- --------------------------------------------------------

--
-- Table structure for table `Activity`
--

CREATE TABLE `Activity` (
  `ActivityId` int(11) NOT NULL,
  `ActivityName` varchar(255) NOT NULL,
  `ActivityDescription` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Campus`
--

CREATE TABLE `Campus` (
  `CampusId` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) NOT NULL,
  `Suburb` varchar(255) NOT NULL,
  `PostCode` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `TelephoneNo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `CampusSchool`
--

CREATE TABLE `CampusSchool` (
  `CampusSchoolId` int(11) NOT NULL,
  `SchoolId` int(11) DEFAULT NULL,
  `CampusId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Enrollment`
--

CREATE TABLE `Enrollment` (
  `EnrollmentId` int(11) NOT NULL,
  `EnrollmentDateTime` datetime NOT NULL,
  `StudentId` int(11) DEFAULT NULL,
  `CampusSchoolId` int(11) DEFAULT NULL,
  `UnitId` int(11) DEFAULT NULL,
  `ModeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Mode`
--

CREATE TABLE `Mode` (
  `ModeId` int(11) NOT NULL,
  `ModeType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Room`
--

CREATE TABLE `Room` (
  `RoomId` int(11) NOT NULL,
  `RoomName` varchar(255) NOT NULL,
  `Level` int(11) NOT NULL,
  `Building` varchar(255) NOT NULL,
  `Capacity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `School`
--

CREATE TABLE `School` (
  `ScoolId` int(11) NOT NULL,
  `SchoolName` varchar(255) NOT NULL,
  `SchoolDescription` varchar(255) NOT NULL,
  `ContactPerson` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `HeadOfTheSchool` varchar(255) NOT NULL,
  `BuildingNo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Semester`
--

CREATE TABLE `Semester` (
  `SemesterId` int(11) NOT NULL,
  `SemesterName` varchar(255) NOT NULL,
  `Duration` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `StudentId` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `SurName` varchar(255) NOT NULL,
  `TelephoneNo` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `PostCode` varchar(255) NOT NULL,
  `Suburb` varchar(255) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `DOB` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Unit`
--

CREATE TABLE `Unit` (
  `UnitId` int(11) NOT NULL,
  `UnitCode` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Duration` varchar(255) NOT NULL,
  `Credits` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `UnitActivity`
--

CREATE TABLE `UnitActivity` (
  `UnitActivityId` int(11) NOT NULL,
  `UnitId` int(11) DEFAULT NULL,
  `ActivityId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `UnitCoordinator`
--

CREATE TABLE `UnitCoordinator` (
  `UnitCoordinatorId` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `DOB` datetime NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) NOT NULL,
  `Suburb` varchar(255) NOT NULL,
  `PostCode` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `TelephoneNo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `UnitRoom`
--

CREATE TABLE `UnitRoom` (
  `UnitRoomId` int(11) NOT NULL,
  `UnitId` int(11) DEFAULT NULL,
  `RoomId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `UnitUnitCoordinator`
--

CREATE TABLE `UnitUnitCoordinator` (
  `UnitUnitCoordinatorId` int(11) NOT NULL,
  `UnitId` int(11) DEFAULT NULL,
  `UnitCoordinatorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Year`
--

CREATE TABLE `Year` (
  `YearId` int(11) NOT NULL,
  `YearName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Activity`
--
ALTER TABLE `Activity`
  ADD PRIMARY KEY (`ActivityId`);

--
-- Indexes for table `Campus`
--
ALTER TABLE `Campus`
  ADD PRIMARY KEY (`CampusId`);

--
-- Indexes for table `CampusSchool`
--
ALTER TABLE `CampusSchool`
  ADD PRIMARY KEY (`CampusSchoolId`),
  ADD UNIQUE KEY `REL_37808ac1c46bbbefae83d07597` (`SchoolId`),
  ADD UNIQUE KEY `REL_087d185a85e7dba93419826db5` (`CampusId`);

--
-- Indexes for table `Enrollment`
--
ALTER TABLE `Enrollment`
  ADD PRIMARY KEY (`EnrollmentId`),
  ADD KEY `FK_d7fa0f4d3b2ed94c51849f68552` (`StudentId`),
  ADD KEY `FK_17eaeb4c3fbe7602f4c6644d54e` (`CampusSchoolId`),
  ADD KEY `FK_d23f5084d78e8b8b4be58edab5c` (`UnitId`),
  ADD KEY `FK_04de544a57d065c7396650c3f49` (`ModeId`);

--
-- Indexes for table `Mode`
--
ALTER TABLE `Mode`
  ADD PRIMARY KEY (`ModeId`);

--
-- Indexes for table `Room`
--
ALTER TABLE `Room`
  ADD PRIMARY KEY (`RoomId`);

--
-- Indexes for table `School`
--
ALTER TABLE `School`
  ADD PRIMARY KEY (`ScoolId`);

--
-- Indexes for table `Semester`
--
ALTER TABLE `Semester`
  ADD PRIMARY KEY (`SemesterId`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`StudentId`);

--
-- Indexes for table `Unit`
--
ALTER TABLE `Unit`
  ADD PRIMARY KEY (`UnitId`),
  ADD UNIQUE KEY `IDX_97ba17c538c68b0d98a47bb9da` (`UnitCode`);

--
-- Indexes for table `UnitActivity`
--
ALTER TABLE `UnitActivity`
  ADD PRIMARY KEY (`UnitActivityId`),
  ADD UNIQUE KEY `REL_6d4274aa08900547cdb2b7a05e` (`UnitId`),
  ADD UNIQUE KEY `REL_90bf629e7e0209ab5ba459920b` (`ActivityId`);

--
-- Indexes for table `UnitCoordinator`
--
ALTER TABLE `UnitCoordinator`
  ADD PRIMARY KEY (`UnitCoordinatorId`);

--
-- Indexes for table `UnitRoom`
--
ALTER TABLE `UnitRoom`
  ADD PRIMARY KEY (`UnitRoomId`),
  ADD UNIQUE KEY `REL_1a13f33b88964b5d48953fb3fa` (`UnitId`),
  ADD UNIQUE KEY `REL_7f19f85f848d1d76f6062427ca` (`RoomId`);

--
-- Indexes for table `UnitUnitCoordinator`
--
ALTER TABLE `UnitUnitCoordinator`
  ADD PRIMARY KEY (`UnitUnitCoordinatorId`),
  ADD UNIQUE KEY `REL_8de3e0be8d8570f44f459878d2` (`UnitId`),
  ADD UNIQUE KEY `REL_a8df037235f5e65addfec85c5c` (`UnitCoordinatorId`);

--
-- Indexes for table `Year`
--
ALTER TABLE `Year`
  ADD PRIMARY KEY (`YearId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Activity`
--
ALTER TABLE `Activity`
  MODIFY `ActivityId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Campus`
--
ALTER TABLE `Campus`
  MODIFY `CampusId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `CampusSchool`
--
ALTER TABLE `CampusSchool`
  MODIFY `CampusSchoolId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Enrollment`
--
ALTER TABLE `Enrollment`
  MODIFY `EnrollmentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Mode`
--
ALTER TABLE `Mode`
  MODIFY `ModeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Room`
--
ALTER TABLE `Room`
  MODIFY `RoomId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `School`
--
ALTER TABLE `School`
  MODIFY `ScoolId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Semester`
--
ALTER TABLE `Semester`
  MODIFY `SemesterId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Student`
--
ALTER TABLE `Student`
  MODIFY `StudentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Unit`
--
ALTER TABLE `Unit`
  MODIFY `UnitId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UnitActivity`
--
ALTER TABLE `UnitActivity`
  MODIFY `UnitActivityId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UnitCoordinator`
--
ALTER TABLE `UnitCoordinator`
  MODIFY `UnitCoordinatorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UnitRoom`
--
ALTER TABLE `UnitRoom`
  MODIFY `UnitRoomId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UnitUnitCoordinator`
--
ALTER TABLE `UnitUnitCoordinator`
  MODIFY `UnitUnitCoordinatorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Year`
--
ALTER TABLE `Year`
  MODIFY `YearId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CampusSchool`
--
ALTER TABLE `CampusSchool`
  ADD CONSTRAINT `FK_087d185a85e7dba93419826db56` FOREIGN KEY (`CampusId`) REFERENCES `Campus` (`CampusId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_37808ac1c46bbbefae83d07597e` FOREIGN KEY (`SchoolId`) REFERENCES `School` (`ScoolId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Enrollment`
--
ALTER TABLE `Enrollment`
  ADD CONSTRAINT `FK_04de544a57d065c7396650c3f49` FOREIGN KEY (`ModeId`) REFERENCES `Mode` (`ModeId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_17eaeb4c3fbe7602f4c6644d54e` FOREIGN KEY (`CampusSchoolId`) REFERENCES `CampusSchool` (`CampusSchoolId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d23f5084d78e8b8b4be58edab5c` FOREIGN KEY (`UnitId`) REFERENCES `Unit` (`UnitId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d7fa0f4d3b2ed94c51849f68552` FOREIGN KEY (`StudentId`) REFERENCES `Student` (`StudentId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `UnitActivity`
--
ALTER TABLE `UnitActivity`
  ADD CONSTRAINT `FK_6d4274aa08900547cdb2b7a05e1` FOREIGN KEY (`UnitId`) REFERENCES `Unit` (`UnitId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_90bf629e7e0209ab5ba459920bd` FOREIGN KEY (`ActivityId`) REFERENCES `Activity` (`ActivityId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `UnitRoom`
--
ALTER TABLE `UnitRoom`
  ADD CONSTRAINT `FK_1a13f33b88964b5d48953fb3fae` FOREIGN KEY (`UnitId`) REFERENCES `Unit` (`UnitId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7f19f85f848d1d76f6062427cab` FOREIGN KEY (`RoomId`) REFERENCES `Room` (`RoomId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `UnitUnitCoordinator`
--
ALTER TABLE `UnitUnitCoordinator`
  ADD CONSTRAINT `FK_8de3e0be8d8570f44f459878d2f` FOREIGN KEY (`UnitId`) REFERENCES `Unit` (`UnitId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a8df037235f5e65addfec85c5cd` FOREIGN KEY (`UnitCoordinatorId`) REFERENCES `UnitCoordinator` (`UnitCoordinatorId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;