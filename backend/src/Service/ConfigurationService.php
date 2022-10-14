<?php declare (strict_types = 1);
namespace App\Service;


use App\Entity\Configuration;
use App\Repository\ConfigurationRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class ConfigurationService
{

    private $parametre;
    private $valeur;
    private  $em;
    private  $configuration;
    private  $configurationRepository;

    public function __construct(EntityManagerInterface $em, ConfigurationRepository $configurationRepository)
    {
        $this->em = $em;
        $this->configurationRepository = $configurationRepository;
        $this->configuration = new Configuration();
    }

    public function setParametre(String $parametre, String $valeur)
    {
        
        $this->configuration = $this->configurationRepository->findOneBy([
            'parametre'=> $parametre
        ]);
        $this->configuration->setValeur($valeur);
        $this->em->persist($this->configuration);
        $this->em->flush();
    }
public function getParametre(String $parametre) {

    $this->configuration = $this->configurationRepository->findOneBy([
        'parametre'=> $parametre
    ]);
    return $this->configuration->getValeur();
}

}