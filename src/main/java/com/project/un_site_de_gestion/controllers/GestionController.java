package com.project.un_site_de_gestion.controllers;


import com.project.un_site_de_gestion.services.IGestionService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@AllArgsConstructor
@RequestMapping("/gestion")
public class GestionController {
    @Autowired
    IGestionService gestionService;

/*    @PostMapping("/a")
    public Car addCar(@RequestBody  Car car) {
        return rentalService.addCar(car);
    }

    @PostMapping("/b")
    public Customer addCustomer(@RequestBody  Customer customer) {
        return rentalService.addCustomer(customer);
    }

    @PostMapping("/c")
    public Rental addRental(@RequestBody  Rental rental, @RequestParam String customerEmail,@RequestParam String carModel) {
        return rentalService.addRental(rental,customerEmail,carModel);
    }

    @PutMapping("/d")
    public Rental updateMileageAndRentalStatus(@RequestParam String registrationPlate,@RequestParam int mileage) {
        return rentalService.updateMileageAndRentalStatus(registrationPlate,mileage);
    }

    @GetMapping("/listeClients")
    public List<Car> getCarsByCustomerEmail(@RequestParam String customerEmail) {
        return rentalService.getCarsByCustomerEmail(customerEmail);
    }

    @GetMapping("/listeClientsA")
    public List<Car> getCarsByAge(@RequestParam LocalDate startdate,@RequestParam  LocalDate enddate,@RequestParam LocalDate manifacturedate) {
        return rentalService.getCarsByAge(startdate,enddate,manifacturedate);
    }*/

}
