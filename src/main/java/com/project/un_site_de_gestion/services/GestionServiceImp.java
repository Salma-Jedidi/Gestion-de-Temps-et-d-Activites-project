package com.project.un_site_de_gestion.services;

import com.project.un_site_de_gestion.repos.AvantageRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.un_site_de_gestion.repos.*;

@AllArgsConstructor
@Slf4j
@Service
public class GestionServiceImp implements IGestionService {

   @Autowired
   AvantageRepo avantageRepo;
    @Autowired
    ClientRepo clientRepository;
    @Autowired
    CongeRepo congeRepo;
    @Autowired
    ContratRepo contratRepo;
    @Autowired
    DepartementRepo departementRepo;
    @Autowired
    EmployeRepository employeRepository;
    @Autowired
    FonctionRepo fonctionRepo;
    @Autowired
    SalaireRepo salaireRepo;
/*
    @Override
    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Rental addRental(Rental rental, String customerEmail, String carModel) {
        Customer customer=customerRepository.findByCustomerEmail(customerEmail);
        //Car car=carRepository.findBycarModel(carModel);
        //rental.setCar(car);
        rental.setCustomer(customer);
        return rentalRepository.save(rental);
    }

    @Override
    public Rental updateMileageAndRentalStatus(String registrationPlate, int mileage) {
       Rental rental=rentalRepository.findByMileage(mileage);
       //Car car=carRepository.findByRegistration(registrationPlate);
       //rental.setCar(car);
        return rentalRepository.save(rental);
    }

    @Override
    public List<Car> getCarsByCustomerEmail(String customerEmail) {

        return  null;
    }

    @Override
    public List<Car> getCarsByAge(LocalDate startdate, LocalDate enddate, LocalDate manifacturedate) {
*//*
        List<Car> cars=carRepository.findBymanifacturedate();
        for(Car car:cars)
        {
            if (car.getManufactureAt().isAfter(startdate)&& car.getManufactureAt().isBefore(enddate))
                log.info("La liste des cars : " + cars.getDateCar() +



        }


    }*//*
return null;}*/}


