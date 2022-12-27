<?php

namespace App\Repository;

use App\Entity\Conseillerclient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Conseillerclient|null find($id, $lockMode = null, $lockVersion = null)
 * @method Conseillerclient|null findOneBy(array $criteria, array $orderBy = null)
 * @method Conseillerclient[]    findAll()
 * @method Conseillerclient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConseillerclientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Conseillerclient::class);
    }

    // /**
    //  * @return Conseillerclient[] Returns an array of Conseillerclient objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Conseillerclient
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
