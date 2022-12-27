<?php

namespace App\Repository;

use App\Entity\Appelsortant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Appelsortant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Appelsortant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Appelsortant[]    findAll()
 * @method Appelsortant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppelsortantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Appelsortant::class);
    }

    // /**
    //  * @return Appelsortant[] Returns an array of Appelsortant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Appelsortant
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
