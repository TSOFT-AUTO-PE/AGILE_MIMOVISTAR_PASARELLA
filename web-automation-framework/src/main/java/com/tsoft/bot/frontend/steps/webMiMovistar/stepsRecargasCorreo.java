package com.tsoft.bot.frontend.steps.webMiMovistar;

import com.tsoft.bot.frontend.pageobject.webMiMovistar.PageRecargasCorreo;
import com.tsoft.bot.frontend.utility.ExcelReader;
import com.tsoft.bot.frontend.utility.ExtentReportUtil;
import cucumber.api.java.en.When;


public class stepsRecargasCorreo extends PageRecargasCorreo{

    @When("^se ingresa el email \"([^\"]*)\" y se da click en continuar$")
    public void seIngresaElEmailYSeDaClickEnContinuar(String casoDePrueba) throws Throwable {
        PageRecargasCorreo.ingresarCorreo_clickContinuar(casoDePrueba);
    }

}
