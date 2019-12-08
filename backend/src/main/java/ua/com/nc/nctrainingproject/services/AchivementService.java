package ua.com.nc.nctrainingproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.nc.nctrainingproject.models.Achivement;
import ua.com.nc.nctrainingproject.persistance.dao.postgre.AchivementPostgreDAO;
import ua.com.nc.nctrainingproject.persistance.dao.postgre.ActionPostgreDAO;

import java.util.List;

@Service
public class AchivementService {
    private final AchivementPostgreDAO achivementPostgreDAO;

    @Autowired
    public AchivementService(AchivementPostgreDAO achivementPostgreDAO) {
        this.achivementPostgreDAO = achivementPostgreDAO;
    }
    public void createAchevement(String achievementName,String action,String genre,int count,String entity){
       achivementPostgreDAO.createAchievement(achievementName,action,genre,count,entity);
    }
    public List<Achivement> getAllAchievements(){
        return achivementPostgreDAO.getAllAchievements();
    }
    private List<Achivement> achivements;


}
